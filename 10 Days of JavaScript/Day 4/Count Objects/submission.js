/*
 * Return a count of the total number of objects 'o' satisfying o.x == o.y.
 *
 * Parameter(s):
 * objects: an array of objects with integer properties 'x' and 'y'
 */
function getCount(objects) {
  let count = 0;
  for (let index = 0; index < objects.length; index++) {
    const object = objects[index];

    object["x"] == object["y"] ? count++ : count;
  }
  return count;
}
