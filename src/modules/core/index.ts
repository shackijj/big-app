import { components } from 'knockout';
import '../shared/ui';
import template from './components/core.html';

console.log(template);
components.register('core', {
    template
});