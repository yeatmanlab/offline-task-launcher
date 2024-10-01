export const taskParameters = {
  // params for route core-tasks/vocab
  // This is what's coming back from `getTask`
  swr: {
    task: {
      publicName: "ROAR - Word",
      image:
        "https://raw.githubusercontent.com/yeatmanlab/roar-assets/main/roar-apps/word-no-lion.png",
      description:
        "Words will flash quickly on the screen. Decide if they are real or made up.",
      lastUpdated: {
        seconds: 1727457612,
        nanoseconds: 676000000,
      },
      name: "ROAR - Word",
      id: "swr",
      studentFacingName: "Word",
      technicalName: "Single Word Recognition (SWR)",
      tutorialVideo:
        "https://storage.googleapis.com/roar-swr/en/shared/ROAR-SWR%20instructional%20video.mp4",
      gameConfig: {
        recruitment: "pilot",
        totalTrialsPractice: 5,
        nRandom: 5,
        addNoResponse: false,
        countSlowPractice: 2,
        skipInstructions: true,
        consent: true,
      },
      registered: true,
    },
    variant: {
      lastUpdated: {
        seconds: 1726698728,
        nanoseconds: 612000000,
      },
      registered: true,
      name: "word-school-shortAdaptive-nostory",
      params: {
        audioFeedbackOption: "binary",
        numAdaptive: 84,
        storyOption: "grade-based",
        addNoResponse: false,
        numValidated: 84,
        numNew: 0,
        userMode: "shortAdaptive",
        recruitment: "school",
        consent: true,
        skipInstructions: true,
      },
      id: "1KZ9rzyX62NIZevN8LqK",
    },
  },
  vocab: {
    task: {
      name: "ROAR - Picture Vocabulary",
      image:
        "https://raw.githubusercontent.com/yeatmanlab/roar-assets/main/roar-apps/picture-vocab-no-lion.png",
      studentFacingName: "Picture Vocab",
      id: "vocab",
      description: "Listen to the words and choose the right picture",
      image:
        "https://storage.googleapis.com/road-dashboard/shared/vocab-logo.png",
      name: "Vocabulary",
    },
    variant: {
      description: "a variant of vocab",
      age: null,
      buttonLayout: "default",
      corpus: "vocab-item-bank",
      keyHelpers: false,
      language: "en",
      maxIncorrect: 3,
      maxTime: 100,
      numOfPracticeTrials: 2,
      numOfTrials: 300,
      sequentialPractice: true,
      sequentialStimulus: true,
      skipInstructions: true,
      stimulusBlocks: 3,
      stormItemId: false,
      taskName: "vocab",
    },
  },
  "egma-math": {
    task: {
      description: "Solve the math problems",
      name: "Math Game",
      image:
        "https://storage.googleapis.com/road-dashboard/shared/math-logo.png",
      studentFacingName: "Math Game",
    },
    variant: {
      age: null,
      buttonLayout: "default",
      corpus: "math-item-bank",
      keyHelpers: false,
      language: "en",
      maxIncorrect: 3,
      maxTime: 100,
      numOfPracticeTrials: 2,
      numOfTrials: 300,
      sequentialPractice: true,
      sequentialStimulus: true,
      skipInstructions: true,
      stimulusBlocks: 3,
      stormItemId: false,
      taskName: "egma-math",
    },
  },
  intro: {
    task: {
      description: "Learn how to play the games",
      image:
        "https://storage.googleapis.com/road-dashboard/shared/intro-logo.png",
      name: "Instructions",
    },
    variant: {
      age: null,
      buttonLayout: "default",
      corpus: "null",
      keyHelpers: false,
      language: "en",
      maxIncorrect: 3,
      maxTime: 100,
      numOfPracticeTrials: 2,
      numberOfTrials: 300,
      sequentialPractice: true,
      sequentialStimulus: true,
      skipInstructions: true,
      stimulusBlocks: 3,
      stormItemId: false,
      description: "a variant of intro",
    }
  },
};
