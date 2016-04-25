import { AbstractControlDirective } from './abstract_control_directive';
/**
 * A directive that contains multiple {@link NgControl}s.
 *
 * Only used by the forms module.
 */
export class ControlContainer extends AbstractControlDirective {
    /**
     * Get the form to which this container belongs.
     */
    get formDirective() { return null; }
    /**
     * Get the path to this container.
     */
    get path() { return null; }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29udHJvbF9jb250YWluZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJkaWZmaW5nX3BsdWdpbl93cmFwcGVyLW91dHB1dF9wYXRoLW1sSEVYWmE2LnRtcC9hbmd1bGFyMi9zcmMvY29tbW9uL2Zvcm1zL2RpcmVjdGl2ZXMvY29udHJvbF9jb250YWluZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ik9BQ08sRUFBQyx3QkFBd0IsRUFBQyxNQUFNLDhCQUE4QjtBQUVyRTs7OztHQUlHO0FBQ0gsc0NBQXNDLHdCQUF3QjtJQUc1RDs7T0FFRztJQUNILElBQUksYUFBYSxLQUFXLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO0lBRTFDOztPQUVHO0lBQ0gsSUFBSSxJQUFJLEtBQWUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtGb3JtfSBmcm9tICcuL2Zvcm1faW50ZXJmYWNlJztcbmltcG9ydCB7QWJzdHJhY3RDb250cm9sRGlyZWN0aXZlfSBmcm9tICcuL2Fic3RyYWN0X2NvbnRyb2xfZGlyZWN0aXZlJztcblxuLyoqXG4gKiBBIGRpcmVjdGl2ZSB0aGF0IGNvbnRhaW5zIG11bHRpcGxlIHtAbGluayBOZ0NvbnRyb2x9cy5cbiAqXG4gKiBPbmx5IHVzZWQgYnkgdGhlIGZvcm1zIG1vZHVsZS5cbiAqL1xuZXhwb3J0IGNsYXNzIENvbnRyb2xDb250YWluZXIgZXh0ZW5kcyBBYnN0cmFjdENvbnRyb2xEaXJlY3RpdmUge1xuICBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgZm9ybSB0byB3aGljaCB0aGlzIGNvbnRhaW5lciBiZWxvbmdzLlxuICAgKi9cbiAgZ2V0IGZvcm1EaXJlY3RpdmUoKTogRm9ybSB7IHJldHVybiBudWxsOyB9XG5cbiAgLyoqXG4gICAqIEdldCB0aGUgcGF0aCB0byB0aGlzIGNvbnRhaW5lci5cbiAgICovXG4gIGdldCBwYXRoKCk6IHN0cmluZ1tdIHsgcmV0dXJuIG51bGw7IH1cbn1cbiJdfQ==