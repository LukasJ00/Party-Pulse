<?php

/**
 * RoosterTeeth.php
 *
 * @package Embera
 * @author Michael Pratt <yo@michael-pratt.com>
 * @link   http://www.michael-pratt.com/
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */
namespace DevOwl\RealCookieBanner\Vendor\Embera\Provider;

use DevOwl\RealCookieBanner\Vendor\Embera\Url;
/**
* RoosterTeeth Provider
* Season 7 Episode 76 - Go to http:betterhelp.comfunhausgta to get 10% off your first month!
Tha...
*
* @link https://roosterteeth.com
*
 * @internal
*/
class RoosterTeeth extends ProviderAdapter implements ProviderInterface
{
    /** inline {@inheritdoc} */
    protected $endpoint = 'https://roosterteeth.com/oembed?format=json';
    /** inline {@inheritdoc} */
    protected static $hosts = ['roosterteeth.com'];
    /** inline {@inheritdoc} */
    protected $httpsSupport = \true;
    /** inline {@inheritdoc} */
    protected $responsiveSupport = \false;
    /** inline {@inheritdoc} */
    public function validateUrl(Url $url)
    {
        return (bool) \preg_match('~roosterteeth\\.com/watch/([^/]+)$~i', (string) $url);
    }
    /** inline {@inheritdoc} */
    public function normalizeUrl(Url $url)
    {
        $url->convertToHttps();
        $url->removeQueryString();
        $url->removeLastSlash();
        return $url;
    }
    /** inline {@inheritdoc} */
    public function getFakeResponse()
    {
        $embedUrl = $this->url . '?feature=oembed&autoplay=1';
        $attr = [];
        $attr[] = 'src="' . $embedUrl . '"';
        $attr[] = 'frameborder="0"';
        $attr[] = 'allow="autoplay; encrypted-media"';
        $attr[] = 'allowfullscreen';
        return ['type' => 'video', 'provider_name' => 'RoosterTeeth', 'provider_url' => 'https://roosterteeth.com', 'title' => 'Unknown title', 'html' => '<iframe ' . \implode(' ', $attr) . '></iframe>'];
    }
}
