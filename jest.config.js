module.exports={
    "roots": [
        "<rootDir>/src"
      ],
      "collectCoverageFrom": [//指测试覆盖率都是通过分析哪些文件生成的
        "src/**/*.{js,jsx,ts,tsx}",//要分析的文件
        "!src/**/*.d.ts"//不要分析的文件，d.ts文件通常是ts用来声明的
      ],
      "setupFiles": [//运行测试的时候需要额外准备一些什么
        "react-app-polyfill/jsdom"//polyfill是转换es5过程中需要用的函数库
      ],
      "setupFilesAfterEnv": [//测试环境准备完成以后执行的脚本文件
        "<rootDir>/src/setupTests.js"
      ],
      "testMatch": [//设置识别哪些文件是测试文件（glob形式），与testRegex互斥，不能同时写
        "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
        "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}"
      ],
      "testEnvironment": "jsdom",//测试环境 可修改为node
      "testRunner": "D:\\programs\\jest-react1\\node_modules\\jest-circus\\runner.js",
      "transform": {
        "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "<rootDir>/config/jest/babelTransform.js",
        "^.+\\.css$": "<rootDir>/config/jest/cssTransform.js",//css不会被测试，该文件默认将css代码变成空对象。
        "^(?!.*\\.(js|jsx|mjs|cjs|ts|tsx|css|json)$)": "<rootDir>/config/jest/fileTransform.js"//该行的意思是把js|jsx|mjs|cjs|ts|tsx|css|json之外的文件转换成文件名或者一个标准类型的svg文件内容就行了
      },
      "transformIgnorePatterns": [//哪些文件的转换会被忽略
        "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",//
        "^.+\\.module\\.(css|sass|scss)$"
      ],
      "modulePaths": [],//
      "moduleNameMapper": { //
        "^react-native$": "react-native-web",
        "^.+\\.module\\.(css|sass|scss)$": "identity-obj-proxy"//把css里面的选择器和内容转换成key-value的形式
      },
      "moduleFileExtensions": [//引用文件类型猜测规则
        "web.js",
        "js",
        "web.ts",
        "ts",
        "web.tsx",
        "tsx",
        "json",
        "web.jsx",
        "jsx",
        "node"
      ],
      "watchPlugins": [
        "jest-watch-typeahead/filename",
        "jest-watch-typeahead/testname"
      ],
      "resetMocks": true
}