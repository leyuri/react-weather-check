# react-weather-check
도시명 검색 시, 해당 도시의 위치와 날씨를 확인할 수 있는 웹앱 🌦

### Development environment
- React.js
- react-bootstrap, styled-components, fontawesome
- Redux, redux-thunk (for async API call)
- google map api using <a href= "https://reactjs.org/docs/refs-and-the-dom.html">react Refs</a>
- <a href= "http://borisyankov.github.io/react-sparklines">react-sparklines</a>

### Components
- SearchBar : 도시 검색바
- WeatherItem : 도시의 날씨를 나타내는 한 행렬
- WeatherList : WeatherItem 를 합친 총 리스트
- ErrorMessage : 에러 메시지 표시

### Features

- Search city 
- Add city
- Show error message

### Screenshot
- 도시명을 검색할 경우 도시위치(google map api), 도시명, 압력, 온도, 온도차트, 습도차트(openweathermap api)를 볼 수 있다. 
<img width="1309" alt="Screen Shot 2021-08-10 at 9 42 18 PM" src="https://user-images.githubusercontent.com/33794732/128868678-78d0ac5f-02cb-4278-8248-126ace5b8049.png">

- 존재하지 않는 도시명을 검색할 경우 ErrorMessage 메시지가 표출된다. 
<img width="1304" alt="Screen Shot 2021-08-10 at 9 42 34 PM" src="https://user-images.githubusercontent.com/33794732/128868696-3da6e1f7-a367-4b32-98a0-e62fd31b344c.png">

___

### What I learned
- async API call 를 위하여 redux-thunk 를 활용할 수 있다. 
- styled-components를 사용하면 태그 위에 직접 css 설정값을 줄 수 있다.
- google map api → react Refs, componentDidMount
- react-sparklines → third-party APIs
