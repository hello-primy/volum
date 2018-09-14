import jsPDF from 'jspdf'

export default ({ Vue }) => {
  Vue.prototype.$jsPDF = jsPDF
}
