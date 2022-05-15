const { Image, User } = require("../model");
module.exports = {
  //Index
  avatarIndex: (req, res) => {
    return res.sendFile(`${__basedir}/view/upload.html`);
  },
  //Create avatar
  createAvatar: async (req, res) => {
    const { userId, username } = req;
    try {
      await User.update(
        { avatar_path: req.file.filename },
        { where: { accountId: "49623fff-3bb2-42db-b9d3-b55a791d2b24" } }
      );

      const newAvatar = new Image({
        is_avatar: false,
        path: `avatar/${req.file.filename}`,
      });
      await newAvatar.save();

      return res.json({
        success: true,
        message: "upload resource successfull",
      });
    } catch (error) {
      return res.json({
        success: false,
        message: "Server internal error",
      });
    }
  },
  //Show avatar
  showAvatar: (req, res) => {
    const filename = req.params.filename;

    if (filename) {
      try {
        const filepath = `${__basedir}\\public\\upload\\avatar\\${filename}`;
        if (require("fs").existsSync(filepath)) {
          return res.sendFile(filepath);
        } else {
          return res.sendFile(
            `${__basedir}\\public\\upload\\avatar\\${DEFAULT_USER_PIC}`
          );
        }
      } catch (error) {
        return res.json({
          success: "false",
          message: "server internal error",
        });
      }
    }

    return res.status(404).json({
      susscess: false,
      message: "file not found",
    });
  },
  //Create media
  createMedia: async (req, res) => {
    const filename = req.files;
    const { serviceId } = req.body;

    if (!serviceId || serviceId.length < 10) {
      return res.status(400).json({
        message: "bad request",
      });
    }

    if (!filename || req.files.length <= 0) {
      return res.status(400).json({
        message: "You must select at least 1 file.",
      });
    }

    await Promise.all(
      filename.map(async (file) => {
        try {
          const newImage = new Image({
            is_avatar: false,
            serviceId: serviceId,
            path: `media/${file.filename}`,
          });
          await newImage.save();
        } catch (error) {
          console.log(error);
        }
      })
    );

    return res.json({
      success: true,
      message: "upload resource successful",
    });
  },
  //Show media
  showMedia: (req, res) => {
    const filename = req.params.filename;

    if (filename) {
      try {
        const filepath = `${__basedir}\\public\\upload\\media\\${filename}`;
        if (require("fs").existsSync(filepath)) {
          return res.sendFile(filepath);
        }
      } catch (error) {
        return res.json({
          success: "false",
          message: "server internal error",
        });
      }
    }

    return res.status(404).json({
      susscess: false,
      message: "file not found",
    });
  },
};
