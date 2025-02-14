'use client';

import { useCharacterStore } from '@/store/characters';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Badge } from '@/components/ui/badge';
import { 
  UsersIcon, 
  SkullIcon, 
  HeartIcon, 
  HelpCircleIcon,
  MinusIcon,
  FilterXIcon,
  FilterIcon
} from 'lucide-react';

export default function FilterSection() {
  const { filters, setFilters, resetFilters } = useCharacterStore();
  
  const statuses = [
    { value: 'all', label: 'Tümü', icon: UsersIcon },
    { value: 'Alive', label: 'Yaşıyor', icon: HeartIcon },
    { value: 'Dead', label: 'Ölü', icon: SkullIcon },
    { value: 'unknown', label: 'Bilinmiyor', icon: HelpCircleIcon }
  ];
  
  const genders = [
    { value: 'all', label: 'Tümü', icon: UsersIcon },
    { value: 'Female', label: 'Kadın', icon: UsersIcon },
    { value: 'Male', label: 'Erkek', icon: UsersIcon },
    { value: 'Genderless', label: 'Cinsiyetsiz', icon: MinusIcon },
    { value: 'unknown', label: 'Bilinmiyor', icon: HelpCircleIcon }
  ];

  const handleStatusChange = (value: string) => {
    setFilters({ status: value === 'all' ? '' : value });
  };

  const handleGenderChange = (value: string) => {
    setFilters({ gender: value === 'all' ? '' : value });
  };

  const getActiveFiltersCount = (): number => {
    return Object.values(filters).filter(Boolean).length;
  };

  return (
    <Card className="mb-8">
      <CardHeader>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <FilterIcon className="h-5 w-5" />
            <CardTitle>Filtreleme Seçenekleri</CardTitle>
          </div>
          {getActiveFiltersCount() > 0 && (
            <div className="flex items-center gap-2">
              <Badge variant="secondary">
                {getActiveFiltersCount()} aktif filtre
              </Badge>
              <Button 
                variant="ghost" 
                size="sm" 
                onClick={resetFilters}
                className="text-destructive hover:text-destructive"
              >
                <FilterXIcon className="h-4 w-4 mr-1" />
                Filtreleri Temizle
              </Button>
            </div>
          )}
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row gap-6 justify-center">
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <HeartIcon className="h-4 w-4 text-primary" />
              Durum
            </label>
            <Select
              value={filters.status || 'all'}
              onValueChange={handleStatusChange}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tümü" />
              </SelectTrigger>
              <SelectContent>
                {statuses.map(({ value, label, icon: Icon }) => (
                  <SelectItem key={value} value={value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Separator orientation="vertical" className="hidden sm:block" />

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium flex items-center gap-2">
              <UsersIcon className="h-4 w-4 text-primary" />
              Cinsiyet
            </label>
            <Select
              value={filters.gender || 'all'}
              onValueChange={handleGenderChange}
            >
              <SelectTrigger className="w-[200px]">
                <SelectValue placeholder="Tümü" />
              </SelectTrigger>
              <SelectContent>
                {genders.map(({ value, label, icon: Icon }) => (
                  <SelectItem key={value} value={value}>
                    <div className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      {label}
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 