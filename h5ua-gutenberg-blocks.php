<?php
/**
 * Plugin Name: HTML5Up Alpha Gutenberg Blocks
 * Plugin URI: https://github.com/8ctopotamus/h5ua-gutenberg-blocks.git
 * Description: Gutenberg Blocks to accompany the HTML5Up Alpha WordPress Theme.
 * Author URI: https://zylocod.es
 * Version: 1.0.0
 * License: GPL-3.0+
 * License URI: http://www.gnu.org/licenses/gpl-3.0.txt
 *
 * @package GTS
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'src/init.php';
