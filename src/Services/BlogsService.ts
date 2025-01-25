import BlogModel from "../Models/BlogModel.js";


interface ICreateBlog {
  title: string;
  description: string;
  imageUrls: string[];
}

interface IUpdateBlog {
  _id: string;
  title: string;
  description: string;
  imageUrls: string[];
}

interface IGetAllForums {
  itemSize: string;
  param: string;
}

export class BlogsService {
  // Create a new blog
  async CreateBlog({ title, description, imageUrls }: ICreateBlog) {
    if (!title || !description) {
      return {
        status: false,
        message: "Title, description, and at least one image URL are required.",
      };
    }

    const allImageUrls = imageUrls.map((url) => url.trim());
    try {
      const newForum = new BlogModel({
        title,
        pictures: allImageUrls,
        description,
      });
      await newForum.save();

      return {
        status: true,
        message: "Blog created successfully.",
        data: newForum,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message,
      };
    }
  }

  // Fetch all blogs with pagination
  async getAllBlogs({ itemSize, param }: IGetAllForums) {
    try {
      const page = parseInt(param, 10) || 1;
      const pageSize = parseInt(itemSize, 10) || 10;
      const skip = (page - 1) * pageSize;

      const allForums = await BlogModel.find({})
        .skip(skip)
        .limit(pageSize)
        .sort({ createdAt: -1 });

      return {
        status: true,
        data: allForums,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message,
        data: [],
      };
    }
  }

  // Update an existing blog
  async UpdateBlog({ _id, description, imageUrls, title }: IUpdateBlog) {
    if (!title && !description && !imageUrls) {
      return {
        status: false,
        message: "No updates provided.",
      };
    }

    try {
      const foundForum = await BlogModel.findById(_id);

      if (!foundForum) {
        return {
          status: false,
          message: "This blog could not be found.",
        };
      }

      const allImageUrls = imageUrls.map((url) => url.trim());
      if (allImageUrls.length > 0) {
        foundForum.pictures = allImageUrls;
      }
      if (title?.trim()) {
        foundForum.title = title;
      }
      if (description?.trim()) {
        foundForum.description = description;
      }

      await foundForum.save();

      return {
        status: true,
        message: "Successfully updated forum.",
        data: foundForum,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message,
      };
    }
  }

  // Delete a forum
  async DeleteBlog(_id: string) {
    try {
      const deletedForum = await BlogModel.findByIdAndDelete(_id);

      if (!deletedForum) {
        return {
          status: false,
          message: "This Forum does not exist.",
        };
      }

      return {
        status: true,
        message: "Forum successfully deleted.",
        data: deletedForum,
      };
    } catch (error: any) {
      return {
        status: false,
        message: error.message,
      };
    }
  }
}
