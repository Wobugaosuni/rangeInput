window.onload = function() {

  // 获取滑动条及其容器的元素
  const rangeInputElement = document.getElementById('rangeInputElement')
  const wrapperElement = rangeInputElement.parentNode

//   console.log('rangeInputElement:', rangeInputElement)
//   console.log('wrapperElement:', wrapperElement)

  // 创建一个output的元素
  const outputElement = document.createElement('output')
  // 插入
  wrapperElement.appendChild(outputElement)
//   console.log('wrapperElement:', wrapperElement)

  // 存储range类型的input的当前值
  let rangeValue = null

//   outputElement.setAttribute('for', rangeInputElement.id);
  // 实时更新滑块的值
  updateRangeValue();
  console.log('getComputedStyle:', getComputedStyle(outputElement).backgroundImage)

  // 判断浏览器是否支持 conic-gradient() ，支持的话增加 .full
  console.log('getComputedStyle:', getComputedStyle(outputElement).backgroundImage)
  // console.log('style:', outputElement.style.length)
  if (getComputedStyle(outputElement).backgroundImage !== 'none') {
    // wrapperElement.classList.add('support-conic-gradient')
  }

  // 滑块滚动时监听值的变化
  wrapperElement.addEventListener('input', updateRangeValue, false)
  wrapperElement.addEventListener('change', updateRangeValue, false)

  // 实时更新滑块的值
  function updateRangeValue() {
    let trackWidth = 275
    let thumbDiameter = 0.1 * trackWidth

    if (rangeValue !== rangeInputElement.value) {
      outputElement.value = rangeValue = rangeInputElement.value
      // 传变量到css
      // 在css中使用var()，绑定在容器上的css变量
      wrapperElement.style.setProperty('--val', rangeValue)
    }

    // 跟着滑块移动
    if (getComputedStyle(outputElement).backgroundImage !== 'none') {
      // 支持圆锥渐变
      document.styleSheets[0].addRule('.wrap:after','transform:' + 'translate(0,' + rangeValue / -100 * (trackWidth - thumbDiameter) + 'px)')
      // console.log('after:', getComputedStyle(wrapperElement, ':after'))
    } else {
      // 不支持圆锥渐变的兜底方案
      outputElement.style.transform = 'translate(' + rangeValue / 100 * (trackWidth - thumbDiameter) + 'px, 0)'
    }
  }
}
