/**
 * @param preferences - target student focus
 * @param knowsProgramming - if student can do programming and know basics
 * @param config - private student ability to perform for different focus modes
 * @returns number of weeks needed for finish education
 */
module.exports = function getTimeForEducation(
    focus = 'family',
    knowsProgramming = true,
    config = {family: 4}
) {

    let total1 = 800;
    let total2 = 1300;
    let totalFocus = config[focus];
    if (knowsProgramming) {
        return Math.ceil(total1 / totalFocus);
    } else {
        return Math.ceil(total2 / totalFocus);
    }
};
  