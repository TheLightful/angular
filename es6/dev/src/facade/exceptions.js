import { BaseWrappedException } from './base_wrapped_exception';
import { ExceptionHandler } from './exception_handler';
export { ExceptionHandler } from './exception_handler';
export class BaseException extends Error {
    constructor(message = "--") {
        super(message);
        this.message = message;
        this.stack = (new Error(message)).stack;
    }
    toString() { return this.message; }
}
/**
 * Wraps an exception and provides additional context or information.
 */
export class WrappedException extends BaseWrappedException {
    constructor(_wrapperMessage, _originalException, _originalStack, _context) {
        super(_wrapperMessage);
        this._wrapperMessage = _wrapperMessage;
        this._originalException = _originalException;
        this._originalStack = _originalStack;
        this._context = _context;
        this._wrapperStack = (new Error(_wrapperMessage)).stack;
    }
    get wrapperMessage() { return this._wrapperMessage; }
    get wrapperStack() { return this._wrapperStack; }
    get originalException() { return this._originalException; }
    get originalStack() { return this._originalStack; }
    get context() { return this._context; }
    get message() { return ExceptionHandler.exceptionToString(this); }
    toString() { return this.message; }
}
export function makeTypeError(message) {
    return new TypeError(message);
}
export function unimplemented() {
    throw new BaseException('unimplemented');
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtbWxIRVhaYTYudG1wL2FuZ3VsYXIyL3NyYy9mYWNhZGUvZXhjZXB0aW9ucy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUFDLG9CQUFvQixFQUFDLE1BQU0sMEJBQTBCO09BQ3RELEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxxQkFBcUI7QUFFcEQsU0FBUSxnQkFBZ0IsUUFBTyxxQkFBcUIsQ0FBQztBQUVyRCxtQ0FBbUMsS0FBSztJQUV0QyxZQUFtQixPQUFPLEdBQVcsSUFBSTtRQUN2QyxNQUFNLE9BQU8sQ0FBQyxDQUFDO1FBREUsWUFBTyxHQUFQLE9BQU8sQ0FBZTtRQUV2QyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUM7SUFDL0MsQ0FBQztJQUVELFFBQVEsS0FBYSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUM7QUFDN0MsQ0FBQztBQUVEOztHQUVHO0FBQ0gsc0NBQXNDLG9CQUFvQjtJQUd4RCxZQUFvQixlQUF1QixFQUFVLGtCQUFrQixFQUFVLGNBQWUsRUFDNUUsUUFBUztRQUMzQixNQUFNLGVBQWUsQ0FBQyxDQUFDO1FBRkwsb0JBQWUsR0FBZixlQUFlLENBQVE7UUFBVSx1QkFBa0IsR0FBbEIsa0JBQWtCLENBQUE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBQztRQUM1RSxhQUFRLEdBQVIsUUFBUSxDQUFDO1FBRTNCLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBTSxJQUFJLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUMvRCxDQUFDO0lBRUQsSUFBSSxjQUFjLEtBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQyxDQUFDO0lBRTdELElBQUksWUFBWSxLQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUd0RCxJQUFJLGlCQUFpQixLQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUMsQ0FBQyxDQUFDO0lBRWhFLElBQUksYUFBYSxLQUFVLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQztJQUd4RCxJQUFJLE9BQU8sS0FBVSxNQUFNLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7SUFFNUMsSUFBSSxPQUFPLEtBQWEsTUFBTSxDQUFDLGdCQUFnQixDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUUxRSxRQUFRLEtBQWEsTUFBTSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDO0FBQzdDLENBQUM7QUFFRCw4QkFBOEIsT0FBZ0I7SUFDNUMsTUFBTSxDQUFDLElBQUksU0FBUyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0FBQ2hDLENBQUM7QUFFRDtJQUNFLE1BQU0sSUFBSSxhQUFhLENBQUMsZUFBZSxDQUFDLENBQUM7QUFDM0MsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QmFzZVdyYXBwZWRFeGNlcHRpb259IGZyb20gJy4vYmFzZV93cmFwcGVkX2V4Y2VwdGlvbic7XG5pbXBvcnQge0V4Y2VwdGlvbkhhbmRsZXJ9IGZyb20gJy4vZXhjZXB0aW9uX2hhbmRsZXInO1xuXG5leHBvcnQge0V4Y2VwdGlvbkhhbmRsZXJ9IGZyb20gJy4vZXhjZXB0aW9uX2hhbmRsZXInO1xuXG5leHBvcnQgY2xhc3MgQmFzZUV4Y2VwdGlvbiBleHRlbmRzIEVycm9yIHtcbiAgcHVibGljIHN0YWNrOiBhbnk7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtZXNzYWdlOiBzdHJpbmcgPSBcIi0tXCIpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLnN0YWNrID0gKDxhbnk+bmV3IEVycm9yKG1lc3NhZ2UpKS5zdGFjaztcbiAgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1lc3NhZ2U7IH1cbn1cblxuLyoqXG4gKiBXcmFwcyBhbiBleGNlcHRpb24gYW5kIHByb3ZpZGVzIGFkZGl0aW9uYWwgY29udGV4dCBvciBpbmZvcm1hdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFdyYXBwZWRFeGNlcHRpb24gZXh0ZW5kcyBCYXNlV3JhcHBlZEV4Y2VwdGlvbiB7XG4gIHByaXZhdGUgX3dyYXBwZXJTdGFjazogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgX3dyYXBwZXJNZXNzYWdlOiBzdHJpbmcsIHByaXZhdGUgX29yaWdpbmFsRXhjZXB0aW9uLCBwcml2YXRlIF9vcmlnaW5hbFN0YWNrPyxcbiAgICAgICAgICAgICAgcHJpdmF0ZSBfY29udGV4dD8pIHtcbiAgICBzdXBlcihfd3JhcHBlck1lc3NhZ2UpO1xuICAgIHRoaXMuX3dyYXBwZXJTdGFjayA9ICg8YW55Pm5ldyBFcnJvcihfd3JhcHBlck1lc3NhZ2UpKS5zdGFjaztcbiAgfVxuXG4gIGdldCB3cmFwcGVyTWVzc2FnZSgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fd3JhcHBlck1lc3NhZ2U7IH1cblxuICBnZXQgd3JhcHBlclN0YWNrKCk6IGFueSB7IHJldHVybiB0aGlzLl93cmFwcGVyU3RhY2s7IH1cblxuXG4gIGdldCBvcmlnaW5hbEV4Y2VwdGlvbigpOiBhbnkgeyByZXR1cm4gdGhpcy5fb3JpZ2luYWxFeGNlcHRpb247IH1cblxuICBnZXQgb3JpZ2luYWxTdGFjaygpOiBhbnkgeyByZXR1cm4gdGhpcy5fb3JpZ2luYWxTdGFjazsgfVxuXG5cbiAgZ2V0IGNvbnRleHQoKTogYW55IHsgcmV0dXJuIHRoaXMuX2NvbnRleHQ7IH1cblxuICBnZXQgbWVzc2FnZSgpOiBzdHJpbmcgeyByZXR1cm4gRXhjZXB0aW9uSGFuZGxlci5leGNlcHRpb25Ub1N0cmluZyh0aGlzKTsgfVxuXG4gIHRvU3RyaW5nKCk6IHN0cmluZyB7IHJldHVybiB0aGlzLm1lc3NhZ2U7IH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1ha2VUeXBlRXJyb3IobWVzc2FnZT86IHN0cmluZyk6IEVycm9yIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IobWVzc2FnZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1bmltcGxlbWVudGVkKCk6IGFueSB7XG4gIHRocm93IG5ldyBCYXNlRXhjZXB0aW9uKCd1bmltcGxlbWVudGVkJyk7XG59XG4iXX0=