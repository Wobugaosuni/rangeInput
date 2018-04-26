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
  updateRangeValue();

  // 滑块滚动时监听值的变化
  wrapperElement.addEventListener('input', updateRangeValue, false)
  wrapperElement.addEventListener('change', updateRangeValue, false)

  function updateRangeValue() {
    let trackWidth = 275
    let thumbDiameter = 0.1 * trackWidth

    if (rangeValue !== rangeInputElement.value) {
      outputElement.value = rangeValue = rangeInputElement.value
      outputElement.style.transform = 'translate(' + rangeValue / 100 * (trackWidth - thumbDiameter) + 'px, 0)'
      // 在css中使用var()，绑定在容器上的css变量
      // wrapperElement.style.setProperty('--val', rangeValue)
      // console.log('wrapperElement:', wrapperElement)
    }
  }
}
