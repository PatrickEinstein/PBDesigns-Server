import BlogModel2 from "../Models/BlogModel";

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

  async CreateBlog2(
    contentHtml: string,
    contentDelta: string,
    excerpt: string
  ) {
    if (!contentHtml) {
      return {
        status: false,
        message: "You cannot create an empty blog",
      };
    }
    try {
      const newBlog2 = new BlogModel2({
        contentHtml,
        contentDelta,
        excerpt,
      });
      await newBlog2.save();

      return {
        status: true,
        message: "Blog created successfully.",
        data: newBlog2,
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

      const allForums = await BlogModel2.find({})
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
  async UpdateBlog(
    _id: string,
    contentHtml: string,
    contentDelta: string,
    excerpt: string,
  ) {
    try {
      const foundBlog = await BlogModel2.findById({_id});

      if (!foundBlog) {
        return {
          status: false,
          message: "This blog could not be found.",
        };
      }

      (foundBlog.contentHtml = contentHtml),
        (foundBlog.contentDelta = contentDelta),
        (foundBlog.excerpt = excerpt);

      await foundBlog.save();

      return {
        status: true,
        message: "Successfully updated forum.",
        data: foundBlog,
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
      const deletedForum = await BlogModel2.findByIdAndDelete(_id);

      if (!deletedForum) {
        return {
          status: false,
          message: "This Blog does not exist.",
        };
      }

      return {
        status: true,
        message: "Blog successfully deleted.",
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
