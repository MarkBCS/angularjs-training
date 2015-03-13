package funmarket.image;

import com.mongodb.DBObject;
import com.mongodb.gridfs.GridFSDBFile;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.data.mongodb.gridfs.GridFsTemplate;
import org.springframework.stereotype.Component;

import java.io.InputStream;
import java.util.List;

@Component
public class GridfsStore implements GridfsStoreInterface {
    @Autowired
    GridFsTemplate gridFsTemplate;

    public String store(InputStream inputStream, String fileName,
                        String contentType, DBObject metaData) {
        return this.gridFsTemplate
            .store(inputStream, fileName, contentType, metaData).getId()
            .toString();
    }

    public GridFSDBFile getById(String id) {
        return this.gridFsTemplate.findOne(new Query(Criteria.where("_id").is(
            id)));
    }

    public GridFSDBFile getByFilename(String fileName) {
        return gridFsTemplate.findOne(new Query(Criteria.where("filename").is(
            fileName)));
    }

    public GridFSDBFile retrive(String fileName) {
        return gridFsTemplate.findOne(
            new Query(Criteria.where("filename").is(fileName)));
    }

    public List findAll() {
        return gridFsTemplate.find(null);
    }
}
