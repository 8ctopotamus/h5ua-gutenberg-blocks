import "./style.scss";
import "./editor.scss";

const { __, setLocaleData } = wp.i18n;
const { registerBlockType } = wp.blocks

const blockStyle = {
	backgroundColor: '#900',
	color: '#fff',
	padding: '20px',
}

registerBlockType( 'h5ua-alpha/test-block', {
	title: __( 'HTML5Up: Test (esnext)', 'gutenberg-examples' ),
	icon: 'universal-access-alt',
	category: 'layout',
	edit() {
		return <div style={ blockStyle }>Basic example with JSX! (editor)</div>
	},
	save() {
		return <div style={ blockStyle }>Basic example with JSX! (front)</div>
	},
} )
