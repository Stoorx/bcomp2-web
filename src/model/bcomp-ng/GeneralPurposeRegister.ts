import MutableRegister from '@/model/bcomp-ng/Register'

export default class GeneralPurposeRegister implements MutableRegister {
  protected _value: Array<boolean>
  
  constructor(width: number)
  
  constructor(value: ReadonlyArray<boolean>)
  
  constructor(arg: number | ReadonlyArray<boolean>) {
    if (typeof arg === 'number') {
      this._value = Array.from({length: arg}, () => false)
    }
    else {
      this._value = Array.from(arg)
    }
  }
  
  toString(): string {
    let res = ''
    this._value.forEach((value, index, array) => {
      res = (value ? '1' : '0') + res
    })
    return res
  }
  
  getBit(index: number): boolean {
    return this._value[index];
  }
  
  getValue(): ReadonlyArray<boolean> {
    return this._value;
  }
  
  setBit(index: number, value: boolean): boolean {
    const old = this._value[index]
    this._value[index] = value
    return old;
  }
  
  setValue(value: ReadonlyArray<boolean>): Array<boolean> {
    const old = this._value
    this._value = Array.from(value)
    return old;
  }
  
  width(): number {
    return this._value.length;
  }
}