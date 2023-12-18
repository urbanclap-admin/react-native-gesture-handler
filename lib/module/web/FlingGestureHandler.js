/* eslint-disable eslint-comments/no-unlimited-disable */
/* eslint-disable */
import Hammer from '@egjs/hammerjs';
import { Direction } from './constants';
import { GesturePropError } from './Errors';
import DraggingGestureHandler from './DraggingGestureHandler';
import { isnan } from './utils';
class FlingGestureHandler extends DraggingGestureHandler {
  get name() {
    return 'swipe';
  }
  get NativeGestureClass() {
    return Hammer.Swipe;
  }
  onGestureActivated(event) {
    this.sendEvent({
      ...event,
      eventType: Hammer.INPUT_MOVE,
      isFinal: false,
      isFirst: true
    });
    this.isGestureRunning = false;
    this.hasGestureFailed = false;
    this.sendEvent({
      ...event,
      eventType: Hammer.INPUT_END,
      isFinal: true
    });
  }
  onRawEvent(ev) {
    super.onRawEvent(ev);
    if (this.hasGestureFailed) {
      return;
    }
    // Hammer doesn't send a `cancel` event for taps.
    // Manually fail the event.
    if (ev.isFinal) {
      setTimeout(() => {
        if (this.isGestureRunning) {
          this.cancelEvent(ev);
        }
      });
    } else if (!this.hasGestureFailed && !this.isGestureRunning) {
      // Tap Gesture start event
      const gesture = this.hammer.get(this.name);
      // @ts-ignore FIXME(TS)
      if (gesture.options.enable(gesture, ev)) {
        this.onStart(ev);
        this.sendEvent(ev);
      }
    }
  }
  getHammerConfig() {
    return {
      // @ts-ignore FIXME(TS)
      pointers: this.config.numberOfPointers,
      direction: this.getDirection()
    };
  }
  getTargetDirections(direction) {
    const directions = [];
    if (direction & Direction.RIGHT) {
      directions.push(Hammer.DIRECTION_RIGHT);
    }
    if (direction & Direction.LEFT) {
      directions.push(Hammer.DIRECTION_LEFT);
    }
    if (direction & Direction.UP) {
      directions.push(Hammer.DIRECTION_UP);
    }
    if (direction & Direction.DOWN) {
      directions.push(Hammer.DIRECTION_DOWN);
    }
    // const hammerDirection = directions.reduce((a, b) => a | b, 0);
    return directions;
  }
  getDirection() {
    // @ts-ignore FIXME(TS)
    const {
      direction
    } = this.getConfig();
    let directions = [];
    if (direction & Direction.RIGHT) {
      directions.push(Hammer.DIRECTION_HORIZONTAL);
    }
    if (direction & Direction.LEFT) {
      directions.push(Hammer.DIRECTION_HORIZONTAL);
    }
    if (direction & Direction.UP) {
      directions.push(Hammer.DIRECTION_VERTICAL);
    }
    if (direction & Direction.DOWN) {
      directions.push(Hammer.DIRECTION_VERTICAL);
    }
    directions = [...new Set(directions)];
    if (directions.length === 0) return Hammer.DIRECTION_NONE;
    if (directions.length === 1) return directions[0];
    return Hammer.DIRECTION_ALL;
  }
  isGestureEnabledForEvent(_ref, _recognizer, _ref2) {
    let {
      numberOfPointers
    } = _ref;
    let {
      maxPointers: pointerLength
    } = _ref2;
    const validPointerCount = pointerLength === numberOfPointers;
    if (!validPointerCount && this.isGestureRunning) {
      return {
        failed: true
      };
    }
    return {
      success: validPointerCount
    };
  }
  updateGestureConfig(_ref3) {
    let {
      numberOfPointers = 1,
      direction,
      ...props
    } = _ref3;
    if (isnan(direction) || typeof direction !== 'number') {
      throw new GesturePropError('direction', direction, 'number');
    }
    return super.updateGestureConfig({
      numberOfPointers,
      direction,
      ...props
    });
  }
}
export default FlingGestureHandler;
//# sourceMappingURL=FlingGestureHandler.js.map