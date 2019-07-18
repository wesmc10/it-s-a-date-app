import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from '../src/App/App';
import './index.css';
import Favicon from 'react-favicon';

ReactDOM.render(
    <BrowserRouter>
        <Favicon url="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAANIAAADwCAMAAABCI8pNAAAAe1BMVEUAAAD////
        l5eX5+fmqqqr8/PxFRUXt7e3q6uqurq6pqalKSkoKCgrn5+eYmJjw8PCSkpLe3t4nJyfY2NiHh4c7OzscHBx2dnYQEBAzMzNAQE
        Bubm5WVla1tbWFhYVoaGjCwsIjIyNfX199fX2goKDMzMyWlpZSUlLAwMDt7ExoAAADKUlEQVR4nO2d61biMBRGE6oW5tJyv4qKw
        My8/xMOyCAgJTHTdJ0k7v2bc/LtVe2iCWmUdiMrHlQFD0Xm2Ki5zsrt472qUQ/0HEdurLObUnZ7XKVqXSePnd2UhqaBu06tmuvs
        pjQ1Ddx3atVcZzcl07jK8d+ysc4ooSTSGSWURDqjhJJIZ5RQEumMEkoinVFCSaQzSiiJdEYJJZHOV5/uddaPxqnPkJg+rjtXiwC
        XSuVmJZ3SndWmvKmUT6TT/S+TslqpKx2sDkWFUjmSTlWPeflRaSAdqT69S6UX6Tw+2J4rJXCN9gxOSm3pLL4o35Vm0lF8MT8qRX
        33vmRzUMqlc/gke1NaSMfwyXqv9FM6hV/KndIv6RB+2eyUIvzubWKkVUs6g29KtZSO4Js/6kk6gm+66rd0BN8s1Fg6gm9GKpqpk
        8+S3DUCAAAAAACAL0XkS7TXjFRi88dKFcq4VTJGMpXKOu2R3n59KRv2pXP4YtbNnHc/xwBKMYBSDKAUAyjFAEoxgFIMoBQD++el
        bjLPS/3D85LhNU0xsnuqTXDuIcEZomR+UH1kLh0AAAAAAAAAAAAAoJK7VtWKR+su5Foj3+9vLeNklSdthFBr5sfNzpajKQRrLXR
        ud9b6W5i1FnJTa8vLL6RqLZg613upXXO1KKGEEkoooRRSLUoooYQSSiiFVIsSSiEqtU2dLe8Zlqq1YJx8skx8StVaME0R3gdaay
        O9CeQdnerp9k9NeUrVAgAAAAAAAAAAAAAARAN7LgKoNcOeiyBqLbDnIohalFBCCSWUUAqpFiWUUEIJJZRCqkUJpRCV2HMRRK0F9
        lyEUWuFPRcAAAB1mEoH8M1UJXOc1JG+epWO4JtXNZSO4JuhWkpH8M1S1VtxD5C20ondH2Za6UI6hF+KnVK9yYngyPdHHS6kU/hk
        8nZ6Yy4dwyfl4YzNrnQOfxT637GhyZwNONJHpWTuEPm7kt5KZ/HDQJ+U9It0Gh9s9bmSHkjnqU9PXyrpPPJ7xLzUH5Uiv5cXJ4/
        zxal2tN8jJqWuVtr99RVj6XTurDblhcTVEmJr+fQ8i0RsPHseLq8WOP4CYJxFKAxDSxEAAAAASUVORK5CYII=" />
        <App />
    </BrowserRouter>,
document.getElementById('root'));