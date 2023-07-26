export const genCharArray = (charA, charZ) => {
  var a = [], i = charA.charCodeAt(0), j = charZ.charCodeAt(0);
  for (; i <= j; ++i) {
    a.push(String.fromCharCode(i));
  }
  return a;
}
export const  getRandomColor=()=> {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


  const getInitials = (name) => {
    let initials;
    const nameSplit = name.split(" ");
    const nameLength = nameSplit.length;
    if (nameLength > 1) {
        initials =
            nameSplit[0].substring(0, 1) +
            nameSplit[nameLength - 1].substring(0, 1);
    } else if (nameLength === 1) {
        initials = nameSplit[0].substring(0, 1);
    } else return;

    return initials.toUpperCase();
};



export const createImageFromInitials = (size, name, color, imgSrc) => {
    if (name == null) return;
    name=getInitials(name)

    const canvas=document.createElement('canvas')
    const context=canvas.getContext('2d')
    canvas.width=canvas.height=size

    context.fillStyle="#ffffff"
    context.fillRect(0,0,size,size)

    context.fillStyle=`#3921FB`
    context.fillRect(0,0,size,size)

    context.fillStyle='#fff';
    context.textBaseline='middle'
    context.textAlign='center'
    context.font =`${300}px 'Poppins', sans-serif`
    context.fillText(name,(size/2),(size/2))
    imgSrc[name] = canvas.toDataURL();
    return canvas.toDataURL()
};