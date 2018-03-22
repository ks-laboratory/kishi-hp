import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { Ng2DeviceService } from 'ng2-device-detector';

// todo
@Injectable()
export class DeviceService {
  deviceSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isDeviceMobile = this.deviceSource.asObservable();

  constructor(private deviceService: Ng2DeviceService) {
    this.deviceSource.next(deviceService.isMobile());
  }

}
