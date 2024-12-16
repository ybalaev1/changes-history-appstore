import { getAppVersion } from './path/to/your/module';

// bundleId (string): Уникальный идентификатор пакета приложения, для которого вы хотите получить информацию.

const main = async () => {
  try {
    const appInfo = await getAppVersion('ru.mos.sport'); // your app bundle id
    console.log('Информация о приложении:', appInfo);
  } catch (error) {
    console.error('Ошибка при получении информации о приложении:', error);
  }
};

main();
