import './hide-diff-signs.css';
import * as pageDetect from 'github-url-detection';

import features from '../feature-manager';

void features.addCssFeature(import.meta.url, [
	pageDetect.hasCode,
	pageDetect.isEditingFile,
]);
