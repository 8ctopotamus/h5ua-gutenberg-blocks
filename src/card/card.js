import "./style.scss"
import "./editor.scss"

const { __, setLocaleData } = wp.i18n
const {
  registerBlockType,
} = wp.blocks
const {
  RichText,
  MediaUpload,
} = wp.editor
const { Button } = wp.components

registerBlockType( 'h5ua-alpha/card', {
  title: __( 'H5U-Alpha Card', 'h5ua-alpha' ),
  icon: 'index-card',
  category: 'layout',
  attributes: {
    title: {
      type: 'array',
      source: 'children',
      selector: 'h3'
    },
    mediaID: {
      type: 'number'
    },
    mediaURL: {
      type: 'string',
      source: 'attribute',
      selector: 'img',
      attribute: 'src',
    },
    card_text: {
      type: 'array',
      source: 'children',
      selector: '.card-text'
    },
    link_text: {
			selector: 'a',
			source: 'children'
		},
		link_url: {
			source: 'attribute',
			selector: 'a',
			attribute: 'href'
		},
  },
  edit: ( props ) => {
    const {
      className,
      attributes: {
        title, 
        mediaID,
        mediaURL,
        card_text,
        link_text,
				link_url,
      },
      setAttributes
    } = props
    const onChangeTitle = value => {
      setAttributes({ title: value })
    }
    const onSelectImage = media => {
      setAttributes({
        mediaURL: media.url,
        mediaID: media.id
      })
    }
    const onChangeCardText = text => {
      setAttributes({ card_text: text })
    }
    const onChangeLinkURL = url => {
      setAttributes({link_url: url})
    }
    const onChangeLinkText = text => {
      setAttributes({link_text: text})
    }
    return (
      <div className={ className }>
        <RichText
          tagName="h3"
          placeholder={ __( 'Card Title...', 'h5ua-alpha' ) }
          value={ title }
          onChange={ onChangeTitle }
        />
        <div className="card-image">
					<MediaUpload
						onSelect={ onSelectImage }
						allowedTypes="image"
						value={ mediaID }
						render={ ( { open } ) => (
							<Button className={ mediaID ? 'image-button' : 'button button-large' } onClick={ open }>
								{ ! mediaID ? __( 'Upload Image', 'h5ua-alpha' ) : <img src={ mediaURL } alt={ __( 'Upload Card Image', 'h5ua-alpha' ) } /> }
							</Button>
						) }
					/>
        </div>
        <RichText
					tagName="div"
					multiline="p"
					className="card-text"
					placeholder={ __( 'Card Text...', 'h5ua-alpha' ) }
					value={ card_text }
					onChange={ onChangeCardText }
        />
        <RichText
          format="string"
          onChange={onChangeLinkText}
          value={link_text}
          placeholder="Link Text..."
          className="card-link-text"
        />
        <RichText
          format="string"
          onChange={ onChangeLinkURL }
          value={ link_url }
          placeholder="Link URL..."
				/>
      </div>
    )
  },
  save: ( props ) => {
    const {
      className,
      attributes: {
        title, 
        mediaURL,
        card_text,
        link_text,
				link_url,
      },
    } = props
    return (
      <section className="box special">
        {
          mediaURL && (
            <span class="image featured">
              <img className="card-image" src={ mediaURL } alt={ __( 'Recipe Image', 'h5ua-alpha' ) } />
            </span>
          )
        }
        <RichText.Content tagName="h3" value={ title } />
        <RichText.Content tagName="div" className="card-text" value={ card_text } />
        {
          link_text && (
            <a href={ link_url ? link_url : '#' } className="button alt">{ link_text }</a>
          )
        }
      </section>
    )
  }
})