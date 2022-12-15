const Tag = require('../model/Tag');

module.exports = {
  index: async (req, res) => {
    try {
      const listTag = await Tag.findAll();
      res.json({ success: true, listTag });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
  create: async (req, res) => {
    const { name, description } = req.body;
    try {
      if (!name || name == '') {
        return res
          .status(404)
          .json({ success: false, message: 'Require tag name' });
      }
      const newTag = new Tag({
        name,
        description: description || '',
      });
      await newTag.save();
      res.json({ success: true, message: 'Created tag successful' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
  update: async (req, res) => {
    const { id, name, description } = req.body;
    try {
      if (!id) return res.json({ success: false, message: 'Tag id not found' });
      const oldTag = await Tag.findOne({ where: { id } });
      if (!oldTag) {
        return res
          .status(404)
          .json({ success: false, message: 'Tag is not exist' });
      }
      await Tag.update(
        {
          name: name || oldTag.name,
          description: description || oldTag.description,
        },
        { where: { id } }
      );
      return res.json({ success: true, message: 'Updated tag successful' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
  destroy: async (req, res) => {
    try {
      const oldTag = await Tag.findOne({ where: { id: req.params.id } });
      if (!oldTag) {
        return res
          .status(404)
          .json({ success: false, message: 'Tag is not exist' });
      }
      await Tag.destroy({ where: { id: req.params.id } });
      res.json({ success: true, message: 'Deleted tag successful' });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .json({ success: false, message: 'Internal server error' });
    }
  },
};
