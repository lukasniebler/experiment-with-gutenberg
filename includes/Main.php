<?php

namespace RRZE\Elements;

defined('ABSPATH') || exit;

use RRZE\Elements\Accordion\Accordion;
use RRZE\Elements\Alert\Alert;
use RRZE\Elements\Button\Button;
use RRZE\Elements\Columns\Columns;
use RRZE\Elements\ContentSlider\ContentSlider;
use RRZE\Elements\CTA\CTA;
use RRZE\Elements\LaTeX\LaTeX;
use RRZE\Elements\LegalText\LegalText;
use RRZE\Elements\Assistant\Assistant;
use RRZE\Elements\News\News;
use RRZE\Elements\Notice\Notice;
use RRZE\Elements\PullDiv\PullDiv;
use RRZE\Elements\TextColumns\TextColumns;
use RRZE\Elements\TimeLine\TimeLine;
use RRZE\Elements\ContentIndex\ContentIndex;
use RRZE\Elements\Lightbox\Lightbox;
use RRZE\Elements\TinyMCE\TinyMCEButtons;
use RRZE\Elements\HiddenText\HiddenText;
use RRZE\Elements\Gallery\Gallery;
use RRZE\Elements\Symbols\Symbols;
use RRZE\Elements\Icon\Icon;
use RRZE\Elements\Tabs\Tabs;
use RRZE\Elements\Table\Table;
use function RRZE\Elements\Config\getThemeGroup;

/**
 * [Main description]
 */
class Main
{
    /**
     * [protected description]
     * @var string
     */
    protected $pluginFile;

    /**
     * [__construct description]
     * @param string $pluginFile [description]
     */
    public function __construct($pluginFile)
    {
        $this->pluginFile = $pluginFile;

        if (getThemeGroup(get_stylesheet()) != 'fau') {
            remove_filter('the_content', 'wpautop');
            add_filter('the_content', 'wpautop', 12);
        }

        add_action('wp_enqueue_scripts', [$this, 'enqueueScripts']);

        new TinyMCEButtons();
        new Lightbox();
        new Accordion($this->pluginFile);
        new Alert();
        new Button();
        new Columns();
        new ContentSlider();
        new LaTeX();
        new News();
        new Notice();
        new PullDiv();
        new TimeLine();
        new ContentIndex();
        new HiddenText();
        new LegalText();
        new Assistant();
		new Symbols();
		new Icon($this->pluginFile);
		new TextColumns();
		new Tabs();
        new Table();
        new CTA($this->pluginFile);

        $theme = wp_get_theme();
        if (in_array($theme->get('Name'), ['FAU Events', 'RRZE 2019'])) {
            new Gallery();
        }
    }

    /**
     * [enqueueScripts description]
     * @return void
     */
    public function enqueueScripts()
    {
        if (is_404() || is_search()) {
            return;
        }

        wp_register_style(
            'rrze-elements',
            plugins_url('assets/css/rrze-elements.css', plugin_basename($this->pluginFile)),
            [],
            RRZE_ELEMENTS_VERSION
        );
    }
}
