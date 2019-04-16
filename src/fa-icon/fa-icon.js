import "./style.scss"
import "./editor.scss"

import FontAwesomeClassList from './fa-classes'
const faClassListObjects = FontAwesomeClassList.map(name => ({ value: name, label: name }) )

const { __, setLocaleData } = wp.i18n
const {
  registerBlockType,
} = wp.blocks
const {
  AlignmentToolbar,
  BlockControls,
} = wp.editor
const {
  ColorPalette,
  SelectControl,
} = wp.components

const colorOptions = [
  { name: 'red', color: '#e89980' },
  { name: 'green', color: '#7fcdb8' }, 
  { name: 'blue', color: '#90b0ba' }, 
  { name: 'yellow', color: '#e5cb95' }, 
  { name: 'black', color: '#666' },
]

const calculateAlignment = alignment => {
  let margin = 0
  switch( alignment ) {
    case 'center':
      margin = '0 auto'
      break;
    case 'right':
      margin = '0 0 0 auto'
      break;
  } 
  return margin
}

registerBlockType( 'h5ua-alpha/fa-icon', {
  title: __( 'FontAwesome Icon | H5UA', 'h5ua-alpha' ),
  icon: 'flag',
  category: 'layout',
  attributes: {
    fa_icon: {
      type: 'array',
      source: 'children',
      selector: 'span',
    },
    alignment: {
      type: 'string',
      'default': 'none',
    },
    color: {
      type: 'string',
      default: colorOptions[0].color
    }
  },
  edit: ( props ) => {
    const {
      className,
      attributes: {
        fa_icon,
        alignment,
        color,
      },
      setAttributes
    } = props
    return (
      <div className={ className }>
        <BlockControls>
          <AlignmentToolbar
            value={ alignment }
            onChange={ alignment => setAttributes({ alignment }) }
          />
        </BlockControls>
        <div className="h5ua-icon" 
          style={{ 
            backgroundColor: color, 
            margin: calculateAlignment(alignment) 
          }}
        >
          <i className={`fa ${fa_icon} fa-2x`}></i>
        </div>
        <SelectControl
          label={ __( 'Choose icon:' ) }
          value={ fa_icon }
          onChange={ fa_icon => setAttributes({ fa_icon }) }
          options={ faClassListObjects }
        />
        <ColorPalette 
          colors={ colorOptions } 
          value={ color }
          onChange={ color => setAttributes( { color } ) } 
        />
      </div>
    )
  },
  save: ( props ) => {
    const {
      attributes: {
        fa_icon,
        alignment,
        color,
      }
    } = props    
    return (
      <div 
        className={`icon major ${fa_icon} ${alignment}`}
        style={{ 
          backgroundColor: color, 
          margin: calculateAlignment(alignment) 
        }}
      >
        <span>{ fa_icon }</span>
      </div>
    )
  }
})