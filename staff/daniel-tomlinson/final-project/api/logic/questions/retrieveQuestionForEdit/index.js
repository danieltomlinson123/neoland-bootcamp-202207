const { Question, User } = require("../../../models");
const { DuplicityError, NotFoundError, SystemError } = require("errors");
const { validateString } = require("validators");
const { AuthError } = require("errors");
const { verifyObjectIdString } = require("../../../utils");

function retrieveQuestionForEdit(userId, questionId) {
  verifyObjectIdString(userId);
  verifyObjectIdString(questionId);

  return User.findById(userId)
    .then((user) => {
      if (!user) throw new NotFoundError(`user with id ${userId} not found`);
      return Question.findById(questionId);
    })
    .then((question) => {
      if (!question)
        throw new NotFoundError(`question with id ${questionId} not found`);

      /* if (question.user.toString() !== userId)
        throw new AuthError(
          `question with id ${questionId} does not belong to user with id ${userId}`
        ); */

      // sanitise
      question._doc.id = question._doc._id.toString();

      delete question._doc._id;

      delete question._doc.__v;

      return question;
    });
}

module.exports = retrieveQuestionForEdit;
