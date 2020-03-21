export interface Register {
  /**
   * Get array of bits in register
   * @return Array of bits in register
   */
  getValue(): ReadonlyArray<boolean>
  
  /**
   * Get value of particular bit
   * @param index
   * @return Value of particular bit
   */
  getBit(index: number): boolean
  
  /**
   * Get width of register
   * @return Count of bits in register
   */
  width(): number
}

export default interface MutableRegister extends Register {
  /**
   * Set value of register
   * @param value New value of register
   * @return Old value of register
   */
  setValue(value: ReadonlyArray<boolean>): Array<boolean>
  
  /**
   * Sets particular bit of register
   * @param index index of bit to change
   * @param value new value for bit
   * @return old value if bit
   */
  setBit(index: number, value: boolean): boolean
}

