export default {
  inserted (el, binding) {
    document.title = binding.value
  },
  update (el, binding) {
    document.title = binding.value
  }
}
