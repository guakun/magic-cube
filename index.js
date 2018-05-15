import * as cssObj from './main.css'
import {log} from './gua.js'

log('init cube')
	var dom = document.querySelector('.cube')
	var start = document.querySelector('#start')
	var pause = document.querySelector('#pause')
if(start && pause) {
	log(dom)
	start.onclick = function() {
		dom.classList.add('active')
	}
	pause.onclick = function() {
		dom.classList.remove('active')
	}
}
