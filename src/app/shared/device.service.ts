import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { DeviceDetectorService } from 'ngx-device-detector';

// todo
@Injectable()
export class DeviceService {
  deviceSource: BehaviorSubject<boolean> = new BehaviorSubject(false);
  isDeviceMobile = this.deviceSource.asObservable();

  constructor(private deviceService: DeviceDetectorService) {
    this.deviceSource.next(deviceService.isMobile());
  }

}
