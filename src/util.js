export const toRadians = deg => deg * Math.PI / 180;
export const toDegrees = rad => rad * 180 / Math.PI;

export const hour2deg = hour => hour * 30;

export const minute2deg = min => min * 6;

export const second2deg = minute2deg;

export const rgb = (r, g, b) => `rgb(${r}, ${g}, ${b})`;

export const gray = grayLevel => rgb(grayLevel, grayLevel, grayLevel);

// TODO: only needed in Indicator
export function computeX(cx, r, rotation) {
  return cx + Math.sin(toRadians(rotation)) * r;
}

// TODO: only needed in Indicator
export function computeY(cy, r, rotation) {
  return cy - Math.cos(toRadians(rotation)) * r;
}

// Calculate percentage on an absolute value
export function perc(x, percentage = 100, natural = false) {
  const ret = x * percentage / 100;
  return natural ? Math.round(ret) : ret;
}

/** @param {number} steps1 - number of steps between each two natural numbers */
export function stepz(x, steps1 = 1) {
  return Math.floor(x * steps1) / steps1;
}

export function fracDigits(x, frac) {
  const tenPows = 10 ** frac;
  return Math.roud(x * tenPows) / tenPows;
}

export function hour2degF(hour, steps1) {
  return hour2deg(stepz(hour, steps1));
}

export function minute2degF(min, steps1) {
  return minute2deg(stepz(min, steps1));
}

export function second2degF(sec, steps1) {
  return second2deg(stepz(sec, steps1));
}

// This is not used yet but is an idea that can make things easier in the future
export class Poly {
  constructor(cx, cy, r) {
    if (Number.isFinite(cx) && Number.isFinite(cy)) {
      if (Number.isFinite(r)) {
        this.cx = cx;
        this.cy = cy;
        this.r = r;
      } else {
        // If only two params are passed they are width and height
        const width = cx, height = cy
        this.cx = width / 2;
        this.cy = height / 2;
        this.r = Math.min(width, height) / 2;
      }
    } else {
      throw `At least one of the coordinates are not a number ${cx} ${cy} ${r}`
    }
  }

  R(rPerc = 100) {
    return this.r * rPerc / 100;
  }

  X(rotDeg, rPerc = 100) {
    return this.cx + Math.sin(toRadians(rotDeg)) * this.R(rPerc);
  }

  Y(rotDeg, rPerc = 100) {
    return this.cy - Math.cos(toRadians(rotDeg)) * this.R(rPerc);
  }

  XY(rotDeg, rPerc = 100) {
    return this.X(rotDeg, rPerc) + ' ' + this.Y(rotDeg, rPerc);
  }

  cmdXY(cmdChar, rotDeg, rPerc) {
    return cmdChar + ' ' + this.XY(rotDeg, rPerc);
  }

}

export class DateHelper {

  static MONTH_NAMES = [
    ,   // 0
    'Jan', // 1
    'Feb', // 2
    'Mar', // 3
    'Apr', // 4
    'May', // 5
    'Jun', // 6
    'Jul', // 7
    'Aug', // 8
    'Sep', // 9
    'Oct', // 10
    'Nov', // 11
    'Dec', // 12
  ]

  static DAY_NAMES = [
      'Sun', //0
      'Mon', //1
      'Tue', //2
      'Wed', //3
      'Thu', //4
      'Fri', //5
      'Sat', //6
  ]

  constructor(timestamp = Date.now()) {
    this.d = new Date(timestamp)
  }

  get now() {
    return this.d.getTime()
  }

  get Y() {
    return this.d.getFullYear()
  }

  get M() {
    return this.d.getMonth() + 1
  }

  get MStr() {
    return DateHelper.MONTH_NAMES[this.M]
  }

  get D() {
    return this.d.getDate()
  }

  get WD() {
    return this.d.getDay()
  }

  get WDStr() {
    return DateHelper.DAY_NAMES[this.WD]
  }

  get H() {
    return this.d.getHours()
  }

  get h() {
    return ( this.H % 12) || 12
  }

  get PM() {
    return this.H > 12
  }

  get AM() {
    return !this.PM
  }

  get m() {
    return this.d.getMinutes()
  }

  get s() {
    return this.d.getSeconds()
  }

  get ms() {
    return this.d.getMilliseconds()
  }

  get hDeg() {
    return this.h * 30
  }

  get mDeg() {
    return this.m * 6
  }

  get sDeg() {
    return this.s * 6
  }

}