# История изменений в AppStore

Этот проект предлагает функцию `getAppVersion`, которая позволяет получать информацию о приложении из iTunes, используя только его `bundleId`.

## Пример

[Пример использования функции](https://github.com/ybalaev1/changes-history-appstore/blob/main/example.ts)

## Использование фукнции
```ts
// appVersion.ts

import axios, { AxiosResponse } from 'axios';

/**
 * Получает информацию о приложении из iTunes по его bundleId.
 * 
 * @param bundleId - Уникальный идентификатор пакета приложения.
 * @returns Объект с информацией о приложении.
 */
export const getAppVersion = async (bundleId: string) => {
  const URL = `https://itunes.apple.com/lookup?bundleId=${bundleId}&country=ru`;
  
  const app = await axios(URL, {
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((responseJSON: AxiosResponse) => {
    return responseJSON.data.results[0];
  });
  
  return app;
};

/*

```

#### Доступные `props` для компонента **MapView**:

| Название | Тип | Описание                                                                                                                                                                                               |
|--|--|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| trackName | string | Название приложения |
| version | string | Версия приложения |
| releaseNotes | string | Примечания к выпуску |

