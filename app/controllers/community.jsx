import { community } from 'actions/community';
import BaseController from 'controllers/base';

class CommunityController extends BaseController {
  start() {
    this.bindTopicToAction('prod_community', community);
  }
}

export default CommunityController;
