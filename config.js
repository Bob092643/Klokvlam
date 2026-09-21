window.KLOKVLAM_CONFIG = {
  appName: "KlokVlam",
  locale: "nl-NL",
  targetAge: "6-9",

  learning: {
    roundSize: 10,

    unlockDigital: {
      requiredCoins: 20,
      requiredAnalogRounds: 2,
      sampleSize: 10,
      requiredCorrect: 7
    }
  },

  rewards: {
    correctAnswerCoins: 1,
    completedRoundBonus: 2,
    subtractCoinsOnError: false
  },

  speech: {
    enabled: true,
    rate: 0.9,
    pitch: 1.08
  },

  storage: {
    progressKey: "klokvlam-progress-v3"
  },

  features: {
    analogWholeHours: true,
    digitalWholeHours: true,
    halfHours: false,
    freePlay: true,
    ads: false,
    accounts: false,
    parentDashboard: false
  }
};
