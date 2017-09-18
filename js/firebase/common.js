/**
 * Created by angie on 7/6/17.
 */
function getRecaptchaMode() {
    // Quick way of checking query params in the fragment. If we add more config
    // we might want to actually parse the fragment as a query string.
    return location.hash.indexOf('recaptcha=invisible') !== -1 ?
        'invisible' : 'normal';
}