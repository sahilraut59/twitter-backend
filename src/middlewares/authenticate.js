import passport from "passport";

export const authenticate = (req, res, next) => {
  passport.authenticate("jwt", (err, user, data) => {
    if (err) next(err);
    if (!user) {
      return res.status(401).json({
        message: "unauthorised access",
      });
    }

    req.user = user;
    next();
  })(req, res, next);
};
