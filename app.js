const btn = document.querySelector("#search-btn");
const input = document.querySelector("input");
async function changeWeather() {
  const input = document.querySelector("input").value;
  const temp = document.querySelector("#temperature");
  const weatherCondition = document.querySelector("#weather-condition");
  const cityName = document.querySelector("#city-name");
  const humidPercent = document.querySelector("#humid-percent");
  const windSpeed = document.querySelector("#wind-speed");
  const weatherIcon = document.querySelector("#icon");
  const bgVideo = document.querySelector("#bg-video");
  const source = bgVideo.querySelector("source");
  const res = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=4c468ad2457e1a7733f25bd52c9c4e0c`
  );

  const data = await res.json();
  temp.innerText = `${Math.floor(data.main.temp - 273.15)}°C `;

  weatherCondition.innerText = `${data.weather[0].main} ${Math.floor(
    data.main.temp_max - 273.15
  )}°/${Math.floor(data.main.temp_min - 273.15)}°`;

  cityName.innerText = `${data.name}`;

  humidPercent.innerText = `${data.main.humidity}%`;

  windSpeed.innerText = `${(data.wind.speed * 3.6).toFixed(2)}`;

  weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

  if (data.weather[0].main === "Clear") {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Clear_Day_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Clear_Night_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }
  if (
    data.weather[0].main === "Clouds" ||
    data.weather[0].description === "few clouds" ||
    data.weather[0].description === "scattered clouds" ||
    data.weather[0].description === "broken clouds"
  ) {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Cloudy_Day_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Cloudy_Night_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }
  if (
    data.weather[0].main === "Rain" &&
    (data.weather[0].description === "shower rain" ||
      data.weather[0].description === "rain" ||
      data.weather[0].description === "moderate rain" ||
      data.weather[0].description === "light rain" ||
      data.weather[0].description === "very light rain")
  ) {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Light_Rain_Day_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Light_Rain_Night_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }
  if (
    data.weather[0].main === "Rain" &&
    (data.weather[0].description === "thunderstorm" ||
      data.weather[0].description === "heavy rain" ||
      data.weather[0].description === "very heavy rain" ||
      data.weather[0].description === "extreme rain" ||
      data.weather[0].description === "heavy intensity rain")
  ) {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Thunderstorm_Day_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Thunderstorm_Night_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }
  if (
    data.weather[0].main === "Snow" ||
    data.weather[0].description === "snow"
  ) {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/SnowFall_Day_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/SnowFall_Night_Sky.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }
  if (
    data.weather[0].main === "Mist" ||
    data.weather[0].description === "mist"
  ) {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Mist_Day.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Mist_Night.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }
  if (
    data.weather[0].main === "Haze" ||
    data.weather[0].description === "haze"
  ) {
    if (data.weather[0].icon.includes("d")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Mist_Day.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
    if (data.weather[0].icon.includes("n")) {
      if (bgVideo.classList.contains("video-visibility-show")) {
        bgVideo.classList.remove("video-visibility-show");
      }
      source.setAttribute("src", "Assets/Mist_Night.mp4");
      setTimeout(() => {
        bgVideo.classList.add("video-visibility-show");
        bgVideo.load();
      }, 500);
    }
  }

  console.log(data);
}

btn.addEventListener("click", () => {
  changeWeather();
});

input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    changeWeather();
  }
});

document.addEventListener("DOMContentLoaded", () => {
  changeWeather();
});
