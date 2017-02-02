import '../shared/ui';

import { components } from 'knockout';
import * as template from './components/foo.html';

components.register('foo', {
    template
});