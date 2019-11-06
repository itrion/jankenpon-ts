import {shape, ShapeName} from "./shapes";

export function jankenpon(one: ShapeName, other: ShapeName) {
    return shape(one).vs(shape(other))
}