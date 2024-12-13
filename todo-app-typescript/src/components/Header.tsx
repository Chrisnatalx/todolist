import React from 'react';
import { TodoTitle } from '../types';
import { CreateTodo } from './CreateTodo';

interface Props {
	onAddTodo: ({ title }: TodoTitle) => void;
}
export const Header: React.FC<Props> = ({ onAddTodo }) => {
	return (
		<header className="header">
			<h1>
				todoApp
				<img
					src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASIAAACuCAMAAAClZfCTAAAAbFBMVEUxeMb///8ndMUhcsSApdeowOIQbMLy9fotdsUdcMM7fsiFqNgXbsMZb8PK2e6Xtt/4+/2Nr9xPic1Kg8q80Oq7z+nt8/rP3fDl7fdilNHf6fWrw+SzyedzntU1e8hbj88AZcCduuBvm9RQhcpnevl4AAAEIElEQVR4nO2d63aqMBBGISBMuKkgXlGrvv87Htqe2jYBDEhrnXy7f7oWKSvukpCZDOg4AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPDLEAlPvuNJIYge3aG/BXlpcDj60125qCmr3dTfREkixfN7ovo/7sn/P/ovjQc9/SRJPs2WrspstTvLVDzic40HCe1zGRB8P0cSTXQ9V1bxc19IgxSFXxWRjBY32kdP7ehuRSQnN9vbrUgU69vtrVbkbUza26xIHI3aW6yIohkUdSsKtmbt7VUkYsP21ioiETYfns2U8WetIjHXjywr/xKRoEOxmZfX5cBzK3LELFRRrgHteLhOXv8y0Wai7Sbw6vj+HSEDmq84KHIClZfT9w++f1FbvBmig2qoSpSAlUQanWbPr0jDUyIKvzlSF75iaBE0NZPyZK0itZnbkkEjmUc/2d1HYKhIKvH9Km07IbdryFhRminjTP5yPx+IqaKVchUlv9zPBzJQkcsgS22K6VykDDS3aryjscRU0U5R5E6tGWqm6yI9iN0Flow1Q0VUaIrcbZ5aIclQkZM0bQxVJC2QZKqoZeujKhL2kkwVOVGjItfNNgHzBYCxIv2e9sE6lh5nScaKKG1JO9bMToJxQGKsyKG8VVEtafrs9Q7tmCtyvH2HIzeMuU7cPRQ5qZpX+8620OpsWNBHkSNv7FjPWQYlvRQ5oujebyw5BiX9FDkUTDsdZQxjkp6K6sHWXYOV8UuS9FZUh2u5mjz6SsVuPhqgyKFOSWduC6Qhil6X2odTWynNkttQG6borbI4bqnq2zO7jIYqqhHJvnEJ0L7H9pzcoaiWFOybYtsDrxv/XYpqSaJhCcBspN2pqF5L6oVHE16x2r2K6mWS5ojZbvb9ipxAXSQx280eQZGWa9vaqajrJhWEUFQbOnZcXWodpJ2KhL9vz7sGyjZkZuV0LWK3FG1jUN3M3tmqyA395k3FoHSNzvGs9KoMWftS28RvyEMWVgYgH8UzYZUH8vrAOZFIIi11tOY1Ww+oL1qWcU4yTdNEUjFXC/xcdvHH0BKs5Xq7XS+bs2rcCq+HV6m1kTEbZz+gKOc1Wf+AogmznOP4ilbckvujK1oxLH4cV1Fl8Z6+kaJwz24eesU4XzTteN3MuyCuhWrGWUcv2ZTt1Y7uKpbMFtVXeiRm66gjny4atmC3pe8wvYLe8L4/LHyjvEjIxMvP8akqF1m2WFST+TlPWbwgbFRIfL5nzhOwAwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD6gPLTW1Dx6B78eej86B78eej46B78dSji9nTy6BC7R29HB4puQUcY6oYKZu8jGR+6wFAnRMxe+zM6VFxgqAMiOmIeaqf2E+WXli8ZBTWHfJNHn4L+Ae1cMST02TO1AAAAAElFTkSuQmCC"
					style={{ width: '60px', height: 'auto' }}
					alt="Typescript image"
				/>
			</h1>
			<CreateTodo saveTodo={onAddTodo} />
		</header>
	);
};
