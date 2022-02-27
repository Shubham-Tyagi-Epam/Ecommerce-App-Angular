export const cumulativeOffSet = (element:any, type: string): { top: number, left: number} => {
    let top = 0;
    let left = 0;
    let right = 0;
    do {
      top += element.offsetTop || 0;
      left += element.offsetLeft || 0;
      element = element.offsetParent;
      console.log("top = " + top);
    } while (element);
  
  
    return {
      top,
      left
    };
  };
  