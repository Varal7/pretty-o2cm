export class Utils {
  public static enumToArray(EnumType: any): Array<{
    key: number;
    value: string;
  }> {
    const arr: Array<{ key: number; value: string; }> = [];
    for (const enumMember in EnumType) {
      if (!EnumType.hasOwnProperty(enumMember)) {
        continue;
      }
      let key = parseInt(enumMember, 10);
      if (key >= 0) {
        arr.push({key: key, value: EnumType[enumMember]});
      }
    }
    return arr;
  }
}
