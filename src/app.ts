import { applyBindingsToNode } from "knockout";
import './modules/core';

const root = document.getElementById('root');
applyBindingsToNode(root, { component: 'core' });
