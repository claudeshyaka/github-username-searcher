import React from "react";
import { createRoot } from 'react-dom/client';

import './index.css'
import {Provider as GitHubProvider} from './context/GithubContext'
import App from './components/App';

const container = document.getElementById('root');
const root = createRoot(container);

root.render(
    <GitHubProvider>
        <App/>
    </GitHubProvider>
);
