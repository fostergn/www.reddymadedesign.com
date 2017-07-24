<?php
 /**
  * Developer Dashboard
  *
  * Include the CO+LAB widget in the WordPress admin dashboard.
  *
  * @link https://developer.wordpress.org/reference/functions/add_meta_box/
  *
  * @package Carbon
  * @subpackage Admin
  * @since 2.0.0
  */
function carbon_wp_dashboard_setup_developer_dashboard_meta_box() {
	function carbon_developer_dashboard_meta_box($post, $args) {
		$author = 'Gavin Foster';
		$phone  = '703-254-8467';
		$email  = 'gavinnfoster@gmail.com';
		$url    = 'www.gavinfoster.com';
		$href   = '//' . $url . '/';
		$logo = '';
		$buffer  = null;
		$buffer .= '<a target="_blank" href="' . $href . '" style="display: block; float: left; margin-right: 10px;">';
		$buffer .=     $logo;
		$buffer .= '</a>';
		$buffer .= '<ul>';
		$buffer .=     '<li><strong>Author:</strong> ' . $author . '</li>';
		$buffer .=     '<li><strong>Phone:</strong> <a href="tel:1' . preg_replace( '/[^0-9]/s', '', $phone ) . '" style="white-space: nowrap;">' . $phone . '</a></li>';
		$buffer .=     '<li><strong>Email:</strong> <a href="mailto:' . $email . '">' . $email . '</a></li>';
		$buffer .=     '<li><strong>URL:</strong> <a target="_blank" href="' . $href . '">' . $url . '</a></li>';
		$buffer .= '</ul>';
		$buffer .= '<p>Custom built by <a target="_blank" href="' . $href . '">' . $author . '</a>.
			When you have questions or need support, please give us a call at
			<a href="tel:1' . preg_replace( '/[^0-9]/s', '', $phone ) . '" style="white-space: nowrap;">' . $phone . '</a>,
			or email at <a href="mailto:' . $email . '">' . $email . '</a>. </p>';
		echo $buffer;
	}
	add_meta_box('carbon-developer-dashboard-meta-box', 'Developer Information', 'carbon_developer_dashboard_meta_box', 'dashboard', 'normal', 'high'); // $args
}
add_action('wp_dashboard_setup', 'carbon_wp_dashboard_setup_developer_dashboard_meta_box', 1);
