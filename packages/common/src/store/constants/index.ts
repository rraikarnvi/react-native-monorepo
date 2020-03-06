  // NOTE
// DO NOT USE dynamic string operations(like template string) as action type property.
// see more details: https://github.com/piotrwitek/typesafe-actions#--the-actions
enum constants   {
  INCREMENT_COUNTER   = "INCREMENT_COUNTER",
   DECREMENT_COUNTER   = "DECREMENT_COUNTER",
   SPLASH_TIMEOUT   = "SPLASH_TIMEOUT",
   SPLASH_SET_ACTION   = "SPLASH_SET_ACTION",
}

export default constants;