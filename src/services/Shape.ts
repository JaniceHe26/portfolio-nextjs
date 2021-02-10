class Shape {
  width: number;
  height: number;
  x: number;
  y: number;
  ele: HTMLElement;
  colors: string[] = ['#fff', '#000']

  constructor(width: number, height: number, x: number, y: number, ele: HTMLElement) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.ele = ele;

    this.modifyShapeStyle();
  }

  private modifyShapeStyle(): void {
    this.ele.style.height = `${this.height}px`;
    this.ele.style.width = `${this.width}px`;
    this.ele.style.top = `${this.y}px`;
    this.ele.style.left = `${this.x}px`;
    this.ele.style.backgroundColor = this.generateRandomBGColor();
  }

  private generateRandomBGColor(): string {
    let random = Math.floor(Math.random() * this.colors.length);
    return this.colors[random];
  }

  //private, public, and protected (which only classes extends can use this)
  protected getRandomHexColor(): string {
    return this.generateRandomBGColor();
  }

  attachToParent(parentEle?: HTMLElement): void {
    let parent = parentEle ? parentEle : document.getElementsByTagName('body')[0];
    // const body = document.getElementsByTagName('body');

    if (parent) {
      parent.appendChild(this.ele);
    }
  }

  delete(): void {
    this.ele.remove();
  }
}

export default Shape;
